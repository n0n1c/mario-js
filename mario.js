
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    //console.log("Uh oh... the pyramid is under construction.");
    //console.log("Check back soon, our developers are hard at work as we speak!");
    // first loop to control height
    for (var rowLength = 0; rowLength < height; rowLength++){
      // establish variables
      var block = "";
      var endblock = "##";
      var spaces = height - rowLength;
      var bricks = rowLength;
      // Second loop to add space
      for (var i = 0; i < spaces; i++){
        block += " ";
      }
      // Third loop to add hash
      for (var i = 0; i < bricks ; i++){
        block += "#";
      }
      console.log(block + endblock);
    }
  }

    // TODO
    // print that pyramid!
