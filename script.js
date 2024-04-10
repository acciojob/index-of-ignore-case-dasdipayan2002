function indexOfIgnoreCase(s1, s2) {
  // write your code here
	
    // Convert both strings to lower case
    let lowerCaseStr = s1.toLowerCase();
    let lowerCaseSubStr = s2.toLowerCase();

    // Use the indexOf method
    let index = lowerCaseStr.indexOf(lowerCaseSubStr);

    // Return the result
    return index;

}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
