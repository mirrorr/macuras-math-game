/**
 * Generate a random integer between min and max (inclusive)
 */
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generate math problems based on level
 * @param {number} level - Current game level
 * @returns {object} - Problem object with numbers, operator, and answer
 */
export const generateProblem = (level) => {
  let maxNum1, maxNum2, minNum1, minNum2;
  let operators = ['+', '-'];
  
  // Determine number ranges based on level
  switch (level) {
    case 1:
      minNum1 = 1; maxNum1 = 5;
      minNum2 = 1; maxNum2 = 5;
      operators = ['+']; // Only addition for level 1
      break;
    case 2:
      minNum1 = 1; maxNum1 = 10;
      minNum2 = 1; maxNum2 = 10;
      break;
    case 3:
      minNum1 = 5; maxNum1 = 15;
      minNum2 = 1; maxNum2 = 10;
      break;
    case 4:
      minNum1 = 10; maxNum1 = 20;
      minNum2 = 1; maxNum2 = 15;
      break;
    case 5:
      minNum1 = 15; maxNum1 = 25;
      minNum2 = 5; maxNum2 = 15;
      operators.push('*'); // Add multiplication from level 5
      break;
    default:
      // Higher levels
      minNum1 = level * 5;
      maxNum1 = level * 10;
      minNum2 = Math.max(1, level - 2);
      maxNum2 = level * 3;
      if (level >= 5) {
        operators.push('*');
      }
      break;
  }
  
  const operator = operators[getRandomInt(0, operators.length - 1)];
  let num1 = getRandomInt(minNum1, maxNum1);
  let num2 = getRandomInt(minNum2, maxNum2);
  let answer;
  
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      // Ensure the result is not negative for kids
      if (num1 < num2) {
        [num1, num2] = [num2, num1]; // Swap to make sure num1 >= num2
      }
      answer = num1 - num2;
      break;
    case '*':
      // Keep multiplication simple
      num2 = getRandomInt(1, Math.min(5, maxNum2));
      answer = num1 * num2;
      break;
    default:
      answer = num1 + num2;
  }
  
  return {
    num1,
    num2,
    operator,
    answer,
    level
  };
};

/**
 * Get level description
 * @param {number} level 
 * @returns {string}
 */
export const getLevelDescription = (level) => {
  if (level === 1) return "Addition with numbers 1-5";
  if (level === 2) return "Addition & Subtraction with numbers 1-10";
  if (level === 3) return "Numbers up to 15";
  if (level === 4) return "Numbers up to 20";
  if (level >= 5) return "Includes multiplication!";
  return `Level ${level}`;
};