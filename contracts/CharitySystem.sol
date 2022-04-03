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
        uint256 projectID;
        uint256 donatedValue;
        // uint account_balance;
        address donatorAddress;
    }

    // Benificiary Structure
    struct Beneficiary {
        string description;
        uint256 maxContr;
        address payable store;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
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
        address payable receiver;
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
            payments[id].receiver.transfer(payments[id].amount);
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
            projectID: 1,
            donatedValue: 10,
            donatorAddress: msg.sender
        });
        donators.push(d);
        return donators.length - 1;
    }

    function make_donations(uint256 id) public payable {
        charityOrgs[0].OrgAddress.transfer(donators[id].donatedValue);
    }

    function selectCharityProject(
        uint256 id,
        uint256 _projectId,
        uint256 value
    ) public {
        if (_projectId != 999) donators[id].projectID = _projectId;
        if (value > 0) donators[id].donatedValue = value;
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
        require(msg.value > minContr);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(
        string memory description,
        uint256 maxContr,
        address store
    ) public {
        Beneficiary storage newRequest = beneficiaries.push();
        newRequest.description = description;
        newRequest.maxContr = maxContr;
        newRequest.store = payable(store);
        newRequest.complete = false;
        newRequest.approvalCount = 0;
        newRequest.display = false;
    }

    function approveRequest(uint256 index) public {
        Beneficiary storage request = beneficiaries[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function transferToStore(uint256 index) public {
        Beneficiary storage request = beneficiaries[index];
        require(request.approvalCount > approversCount / 2);
        request.store.transfer(request.maxContr);
        request.complete = true;
    }

    function RequestMoneyAfterCompletion(uint256 index) public {
        Beneficiary storage request = beneficiaries[index];
        require(request.approvalCount > approversCount / 2);
        Payment memory p = Payment(
            request.description,
            request.maxContr,
            payable(msg.sender),
            true
        );
        payments.push(p);
    }

    // function getBeneficiaries() public view returns (Beneficiary[] ben) {
    //     Beneficiary[] memory _beneficiary = new Beneficiary[](ben.length);
    // for (uint i = 0; i < ben.length; i++) {
    //     _beneficiary[i] = ben[i];
    // }
    // return _beneficiary;
    // }

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
