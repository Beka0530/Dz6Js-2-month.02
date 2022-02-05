let number = 0;

function updateState() {
    document.getElementById('count').textContent = number.toString();
}
const plusPlus = () => {
    number++;
    updateState();
};

plusPlus();

const plusMinus = () => {
    number--;
    updateState();
};

plusMinus();

const plusReset = () => {
    number = 0;
    updateState();
};
plusReset();
