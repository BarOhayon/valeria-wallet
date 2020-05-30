const renderDiceSection = (containerId) => {
    let currentRoll = document.getElementById(containerId);
    currentRoll.innerHTML =
        `<div class="d-flex justify-content-around flex-column">
            <div class="d-flex justify-content-around">
                <input type="button" class="apply" onClick="rollDice()" value="Roll Dice" />
            </div>

        <div class="d-flex justify-content-around">
            <div>
                <img id="leftDie" src='' />
            </div>
            <div>
                <img id="rightDie" src='' />
            </div>
        </div>
    </div>
    `
};