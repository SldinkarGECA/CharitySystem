// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CharitySystem {
    // Charity organization structure
    struct CharityOrg {
        string OrgName;
        address payable OrgAddress;
        string OrgDescription;
    }

    //Donator structure
    struct Donator {
        string donatorName;
        string donatorMessage;
        uint256 amountDonated;
        uint256 donationValue;
        address donatorAddress;
    }

    // Benificiary Structure
    struct Beneficiary {
        string title;
        string description;
        uint256 maxContr;
        uint256 collectedAmount;
        address payable store;
        bool complete;
        uint256 approvalCount;
        bool approved;
        bool display;
    }

    // Co operative store structure
    struct CoopStore {
        string StoreName;
        address StoreAddress;
        // uint account_balance;
    }

    // Payment structure
    struct Payment {
        string description;
        uint256 amount;
        string sender;
        string receiver;
        bool completed;
    }

    // product structure
    struct Product {
        string productId;
        string productName;
        uint256 price;
        address seller;
        bool ongoing;
    }

    // public variables
    CharityOrg[] public charityOrgs;
    Donator[] public donators;
    Beneficiary[] public beneficiaries;
    CoopStore[] public CooperativeStores;
    Payment[] public payments;
    Product[] product;
    // address public reciever;
    uint256 public minContr;
    mapping(address => bool) approvers;
    uint256 public approversCount;
    mapping(string => Product) products;
    Product[] public allProducts;
    address public manager;

    constructor() {
        charityOrgs.push(
            CharityOrg(
                "CharitySystemAdmin",
                payable(msg.sender),
                "This is admin charity organization!"
            )
        );
        product.push(Product("0", "Computer", 10, msg.sender, true));
        product.push(Product("1", "Laptop", 20, msg.sender, true));
        product.push(Product("2", "Food", 5, msg.sender, true));
        product.push(Product("3", "Books", 3, msg.sender, true));
        product.push(Product("4", "Bag", 1, msg.sender, true));
        CoopStore memory co = CoopStore(
            "Genuine_Charity_Cooperative_Store",
            msg.sender
        );
        CooperativeStores.push(co);
        manager = msg.sender;
        beneficiaries.push(
            Beneficiary(
                "Sample Project Meal",
                "Mission: 10 Million Meals is an endeavor to deliver 10 million mid-day meals to school children in one year. All it takes is 2,000 donors commiting to donate 2000 every month and 43,000 hungry children can be fed one hot meal every school day  in 19 states across India.",
                300,
                0,
                payable(msg.sender),
                false,
                1,
                true,
                true
            )
        );
        beneficiaries.push(
            Beneficiary(
                "Sample Project Education",
                "Education is fundamental right for all children, but girls from impoverished, illiterate families are mostly denied this right in India. By the time they reach adolescence, 40% are out of school, kept at home doing ghousehold chores. Join Mission: Every Girl in School and support the education of thousands of girls. 600/month can make a huge difference to one girl life.",
                300,
                0,
                payable(msg.sender),
                false,
                1,
                true,
                true
            )
        );
        beneficiaries.push(
            Beneficiary(
                "Sample Mission Oxygen",
                "Mission Oxygen is an initiative of the Democratic People Foundation. We have partnered with United Way India to enable people from outside India to contribute to the cause.",
                300,
                0,
                payable(msg.sender),
                false,
                1,
                true,
                true
            )
        );
        donators.push(
            Donator(
                "Sandesh",
                "Hi I am from Team Charity System",
                0,
                10,
                msg.sender
            )
        );
    }

    //CHARITY ORG METHODS
    function Post_Project(uint256 id) public {
        // CharityProjects.push(beneficiaries[id]);
        if (msg.sender == charityOrgs[0].OrgAddress) {
            beneficiaries[id].display = true;
        }
    }

    function Send_Money_Beneficiary(uint256 id) public payable {
        if (msg.sender == charityOrgs[0].OrgAddress) {
            // pay money to benficiary
            // Project goal to be implemented
            // payments[id].receiver.transfer(payments[id].amount);
            payments[id].completed = true;
        }
    }

    function Remove_Project(uint256 id) public {
        //remove project after the required money is collected
        beneficiaries[id].display = false;
        // CharityProjects[id] = CharityProjects[CharityProjects.length - 1];
        // delete CharityProjects[CharityProjects.length - 1];
        // CharityProjects.length--;
    }

    function getCharityOrgs() public view returns (CharityOrg[] memory) {
        return charityOrgs;
    }

    // DONATOR METHODS
    function create_donator(
        string memory _donatorName,
        string memory _donatorMessage
    ) public returns (uint256) {
        //constructor
        Donator memory d = Donator({
            donatorName: _donatorName,
            donatorMessage: _donatorMessage,
            amountDonated: 0,
            donationValue: 10,
            donatorAddress: msg.sender
        });
        donators.push(d);
        return donators.length - 1;
    }

    function make_donations(uint256 id, uint256 amount)
        public
        returns (uint256)
    {
        uint256 success = 0;
        if (beneficiaries[id].maxContr >= amount) {
            beneficiaries[id].maxContr = beneficiaries[id].maxContr - amount;
            beneficiaries[id].collectedAmount =
                beneficiaries[id].collectedAmount +
                amount;
            string memory donator = "";
            for (uint256 i = 0; i < donators.length; i++) {
                if (donators[i].donatorAddress == msg.sender) {
                    donators[i].amountDonated =
                        donators[i].amountDonated +
                        amount;
                    donator = donators[i].donatorName;
                }
            }
            success = 1;
            payments.push(
                Payment(beneficiaries[id].title, amount, donator, beneficiaries[id].title, true)
            );
        }
        return success;
    }

    function getPayments() public view returns (Payment[] memory) {
        return payments;
    }

    function getDonators() public view returns (Donator[] memory) {
        return donators;
    }

    // BENEFICIARY METHODS
    /* modifier restrict({
        require(msg.sender == reciever);
        _;
    }) */
    function donateVote() public payable {
        // require(msg.value > minContr);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(
        string memory title,
        string memory description,
        uint256 maxContr
    ) public {
        Beneficiary memory ben = Beneficiary({
            title: title,
            description: description,
            maxContr: maxContr,
            collectedAmount: 0,
            store: payable(msg.sender),
            complete: false,
            approvalCount: 0,
            approved: false,
            display: false
        });
        beneficiaries.push(ben);
    }

    function approveRequest(uint256 index) public {
        Beneficiary storage request = beneficiaries[index];

        require(approvers[msg.sender]);
        // require(!request.approvals[msg.sender]);

        request.approved = true;
        request.approvalCount++;
    }

    function transferToStore(uint256 index) public {
        Beneficiary storage request = beneficiaries[index];
        require(request.approvalCount > approversCount / 2);
        request.store.transfer(request.maxContr);
        request.complete = true;
    }

    // function RequestMoneyAfterCompletion(uint256 index) public {
    //     Beneficiary storage request = beneficiaries[index];
    //     require(request.approvalCount > approversCount / 2);
    //     // Payment memory p = Payment(
    //     //     request.description,
    //     //     request.maxContr,
    //     //     payable(msg.sender),
    //     //     true
    //     // );
    //     payments.push(p);
    // }

    function getBeneficiaries() public view returns (Beneficiary[] memory) {
        return beneficiaries;
    }

    //Product Methods
    function addProduct(
        string memory _productId,
        string memory _productName,
        uint256 _price
    ) public {
        require(!products[_productId].ongoing);

        Product memory product1 = Product(
            _productId,
            _productName,
            _price,
            msg.sender,
            true
        );
        products[_productId].productId = _productId;
        products[_productId].productName = _productName;
        products[_productId].price = _price;
        products[_productId].seller = msg.sender;
        products[_productId].ongoing = true;
        allProducts.push(product1);
    }

    function getAllProducts() public view returns (Product[] memory) {
        return allProducts;
    }

    // COOPERATIVE STORE METHODS
    /* CoopStore Cs; */
    /* modifier onlyBeneficiary() {
   require(msg.sender ==  Beneficiary, "Only Beneficiary!");
        _;
      } */

    function add_product(
        string memory id,
        string memory product_name,
        uint256 price
    ) public {
        product.push(Product(id, product_name, price, msg.sender, true));
    }

    function getProducts() public view returns (Product[] memory) {
        return product;
    }

    function getCoOpStores() public view returns (CoopStore[] memory) {
        return CooperativeStores;
    }

    // function receive_money(uint id) public payable {
    //     require(msg.value >=0.0001 ether);
    //     // CooperativeStores[id].account_balance+=msg.value;
    //     //return products bought by beneficiary.
    // }
    // function update_account() public {
    //     return account_balance;
    // }
}
