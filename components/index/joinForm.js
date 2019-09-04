const getJoinFormHTML = (sharedGameId, userName = '') => {
    return `             
                <div class="d-flex justify-content-start">
                    <div id="joinGameForm">
                        <div class="col gameId label">
                            Game Id:
                        </div>
                        <div class="col">
                            <input type="text" id="gameIdInput" value="${sharedGameId}"/>
                        </div>                        
                        <div class="col userName label">
                            Player Name:
                        </div>
                        <div class="col">
                            <input type="text" id="userNameInput" value="${userName}"/>
                        </div>
                    </div>
                </div> `
};