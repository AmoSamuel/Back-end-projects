* {
  font-family: 'Nunito Sans';
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  padding: 3px;
  background-color: #fff;
}

.game-container {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

header {
  display: flex;
  justify-content: center
}

.rounds {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.round-label {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0px;
}

.guess {
  min-width: 303px;
  height: 328px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px;
}

.guessing-area {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 60px;
}

.guess-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.guess-label {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

.score-label {
  font-size: 14px;
  font-weight: 700;
  margin: 0;
}

.target-guess {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.computer-guess {
  background-color: #ececec;
}

#computer-guess {
  font-size: 50px;
  font-weight: 700;
  color: #a5a5a5;
}

.human-guess {
  border: 1px solid #979797;
}

.guess input {
  height: 90px;
  width: 90px;
  font-size: 30px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 7px;
}

.number-controls {
  font-size: 0;
  margin-bottom: 23px;
}

.number-control {
  border: solid 1px #4c7ef3;
  display: inline-block;
  width: 45px;
  height: 35px;
  font-size: 24px;
  font-weight: 700;
  color: #4c7ef3;
  cursor: pointer;
}

.number-controls button[disabled] {
  color: #dfdfdf;
  cursor: default;
}

.left {
  border-top-left-radius: 22.5px;
  border-bottom-left-radius: 22.5px;
}

.right {
  border-top-right-radius: 22.5px;
  border-bottom-right-radius: 22.5px;
  border-left-width: 0px;
}

.controls {
  display: flex;
  justify-content: space-around;
}

.button {
  background-color: #4c7ef3;
  color: #fff;
  cursor: pointer;
}

#guess {
  padding: 20px;
  width: 169px;
  height: 59px;
  border: none;
  font-weight: 700;
  font-size: 14px;
}

input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

#next-round {
  width: 179px;
  height: 64px;
  font-size: 18px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
}
  
.button[disabled] {
  background-color: #d2d2d2;
  color: #a0a0a0;
  cursor: default;
}

.instructions {
  background-color: #ececec;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.instruction {
  width: 180px;
  padding: 2px;
  text-align: center;
}

.instructions h3 {
  font-size: 14px;
}


.winning-text, .winning-text[disabled] {
  color: #ec3636;
  font-weight: 700;
}
