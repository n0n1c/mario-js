
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
    for (brick = "##", space = " " * "brick.length"; brick.length < height; brick += "#", space-= " ")
      console.log(space, brick)

    // TODO
    // print that pyramid!

}
