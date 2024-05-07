// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.4.26;

contract HelloWorld {
    function compareStrings(string memory a, string memory b)
        public
        view
        returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    struct Panel {
        string id;
        string name;
        uint256 voteCount;
    }
    mapping(address => bool) public voters;
    uint256 public panelsCount;

    mapping(uint256 => Panel) public panels;

    function addPanel(string memory _panelid) public {
        panelsCount++;
        panels[panelsCount] = Panel(_panelid, _panelid, 0);
    }

    event votedEvent(string indexed _panelId);

    function vote(string memory _panelId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        // require(_candidateId > 0 && _candidateId <= candidatesCount);

        // record that voter has voted
        for (uint256 i = 0; i < panelsCount; i++) {
            if (compareStrings(panels[i].id, _panelId)) {
                panels[i].voteCount++;
            }
        }
        //voters[msg.sender] = true;

        // update candidate vote Count

        // trigger voted event
        emit votedEvent(_panelId);
    }

    function winningProposal() public view returns (uint256 winningProposal_) {
        uint256 winningVoteCount = 0;
        for (uint256 p = 0; p < panelsCount; p++) {
            if (panels[p].voteCount > winningVoteCount) {
                winningVoteCount = panels[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    function winnerName() public view returns (string) {
        return panels[winningProposal()].name;
    }
}
