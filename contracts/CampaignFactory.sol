// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;
import "./Campaign.sol";

contract CampaignFactory is Campaign {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum,string name,string description,string image,uint target) public {
        address newCampaign = new Campaign(minimum, msg.sender,name,description,image,target);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}