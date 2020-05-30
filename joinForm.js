const getJoinFormHTML = (sharedRouteId, userName = '') => {
    return `             
                <div class="d-flex justify-content-start">
                    <div id="joinRouteForm">
                        <div class="col routeId label">
                            Route Id:
                        </div>
                        <div class="col">
                            <input type="text" id="routeIdInput" value="${sharedRouteId}"/>
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