//Dealing with viewport height issue (when browser address bar hides the viewport gets higher - we don't want that)
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});



window.addEventListener("load", function() {

//WHEN USER ROTATES PHONE SCREEN TO HORIZONTAL, HE GETS A WARNING/////////////////////
        const verticalView = window.matchMedia("(orientation: portrait)");
        const horizontalView = window.matchMedia("(orientation: landscape)");
        checkOrientation();
    
        function checkOrientation() {
            if (horizontalView.matches) {
                document.getElementById("wrongOrientationWarningDIV").style.display = "block";
                setTimeout(changeOpacities, 5000);
                function changeOpacities() {
                    document.getElementById("morpheus").style.opacity = "0";
                    document.getElementById("phoneRotate").style.opacity = "1"; 
                } 
                horizontalView.onchange = (e) => {
                    if (!e.matches) {
                        document.getElementById("wrongOrientationWarningDIV").style.display = "none";
                    } 
                }
            }
            else if (verticalView.matches) {
                document.getElementById("wrongOrientationWarningDIV").style.display = "none";
                verticalView.onchange = (e) => {
                    if (!e.matches) {
                        document.getElementById("wrongOrientationWarningDIV").style.display = "block";
                        setTimeout(changeOpacities, 5000);
                        function changeOpacities() {
                            document.getElementById("morpheus").style.opacity = "0";
                            document.getElementById("phoneRotate").style.opacity = "1"; 
                        } 
                    } 
                }
            }
        }
    
        verticalView.onchange = (e) => {
            if (!e.matches) {
                document.getElementById("wrongOrientationWarningDIV").style.display = "block";
                setTimeout(changeOpacities, 5000);
                function changeOpacities() {
                    document.getElementById("morpheus").style.opacity = "0";
                    document.getElementById("phoneRotate").style.opacity = "1"; 
                }
            } 
        }
    
        horizontalView.onchange = (e) => {
            if (!e.matches) {
                document.getElementById("wrongOrientationWarningDIV").style.display = "none";
            } 
        }

//INTRO///////////////////////////////////////////////////////////////////
        function remove(el) {
            document.getElementById(el).style.display = "none";
        }

        remove("loadingContainer");

        document.getElementById('spiderman2').addEventListener("animationend", function() {
            document.getElementById('spiderman2').className += " spiderman2Animation2";
        });
        setTimeout(remove, 22000, 'spiderman2');
        
        document.getElementById('superman').className = 'supermanAnimation';
        document.getElementById('heman').className = 'hemanAnimation';
        setTimeout(remove, 11500, 'superman');
        setTimeout(remove, 18200, 'heman');

        function showSpidermanAnimation1() {
            document.getElementById("spiderman").className = "";
            document.getElementById("spiderman").className = "spidermanAnimation1";
        }
        setTimeout(showSpidermanAnimation1, 19500);

        const bigLettersCollection = document.getElementsByClassName("bigLetters");
        for (let i = 0; i < bigLettersCollection.length; i++) {
            bigLettersCollection[i].style.display = "block";
        }

        setTimeout(bigLettersIncreaseOpacityAndResize, 1, 'G');
        setTimeout(bigLettersIncreaseOpacityAndResize, 300, 'A');
        setTimeout(bigLettersIncreaseOpacityAndResize, 600, 'L');
        setTimeout(bigLettersIncreaseOpacityAndResize, 900, 'L2');
        setTimeout(bigLettersIncreaseOpacityAndResize, 1200, "E");
        setTimeout(bigLettersIncreaseOpacityAndResize, 1500, 'R');
        setTimeout(bigLettersIncreaseOpacityAndResize, 1800, 'Y');
    
        function bigLettersIncreaseOpacityAndResize(bigLetter) {
            document.getElementById(bigLetter).style.opacity = "1";
            document.getElementById(bigLetter).style.fontSize = "18vw";
        }

        setTimeout(bigLettersDecrOpacity, 3400);
        function bigLettersDecrOpacity() {
            for (let i = 0; i < bigLettersCollection.length; i++) {
                bigLettersCollection[i].style.opacity = "0.3";
            }
        }

        setTimeout(lettersToYellow, 4200, 'G');
        setTimeout(lettersToYellow, 4700, 'A');
        setTimeout(lettersToYellow, 5200, 'L');
        setTimeout(lettersToYellow, 5700, 'L2');
        setTimeout(lettersToYellow, 6200, "E");
        setTimeout(lettersToYellow, 6700, 'R');
        setTimeout(lettersToYellow, 7200, 'Y');
    
        function lettersToYellow(bigLetter) {
            for (let i = 0; i < bigLettersCollection.length; i++) {
                bigLettersCollection[i].style.transitionProperty = "none";
            }
            setTimeout(yellow, 1, bigLetter);
            setTimeout(white, 500, bigLetter);
        }

        setTimeout(lettersToGreen, 7700, 'G');
        setTimeout(lettersToGreen, 8000, 'A');
        setTimeout(lettersToGreen, 8300, 'L');
        setTimeout(lettersToGreen, 8600, 'L2');
        setTimeout(lettersToGreen, 8900, "E");
        setTimeout(lettersToGreen, 9200, 'R');
        setTimeout(lettersToGreen, 9500, 'Y');

        function lettersToGreen(bigLetter) {
            setTimeout(green, 1, bigLetter);
            setTimeout(white, 300, bigLetter);
        }

        setTimeout(lettersToBlue, 9800, 'G');
        setTimeout(lettersToBlue, 9950, 'A');
        setTimeout(lettersToBlue, 10100, 'L');
        setTimeout(lettersToBlue, 10250, 'L2');
        setTimeout(lettersToBlue, 10400, "E");
        setTimeout(lettersToBlue, 10550, 'R');
        setTimeout(lettersToBlue, 10700, 'Y');

        function lettersToBlue(bigLetter) {
            setTimeout(blue, 1, bigLetter);
            setTimeout(white, 150, bigLetter);
        }

        setTimeout(lettersToLightgreen, 10850, 'G');
        setTimeout(lettersToLightgreen, 10950, 'A');
        setTimeout(lettersToLightgreen, 11050, 'L');
        setTimeout(lettersToLightgreen, 11150, 'L2');
        setTimeout(lettersToLightgreen, 11250, "E");
        setTimeout(lettersToLightgreen, 11350, 'R');
        setTimeout(lettersToLightgreen, 11450, 'Y');

        function lettersToLightgreen(bigLetter) {
            setTimeout(lightgreen, 1, bigLetter);
            setTimeout(white, 100, bigLetter);
        }

        setTimeout(lettersToRed, 11550, 'G');
        setTimeout(lettersToRed, 11600, 'A');
        setTimeout(lettersToRed, 11650, 'L');
        setTimeout(lettersToRed, 11700, 'L2');
        setTimeout(lettersToRed, 11750, "E");
        setTimeout(lettersToRed, 11800, 'R');
        setTimeout(lettersToRed, 11850, 'Y');

        function lettersToRed(bigLetter) {
            setTimeout(red, 1, bigLetter);
        }

        function yellow(letter) {
            document.getElementById(letter).style.color = "yellow";
            document.getElementById(letter).style.opacity = "1";
        }
        function green(letter) {
            document.getElementById(letter).style.color = "#8CFD4D";
            document.getElementById(letter).style.opacity = "1";
        }
        function blue(letter) {
            document.getElementById(letter).style.color = "#6CFFF8";
            document.getElementById(letter).style.opacity = "1";
        }
        function lightgreen(letter) {
            document.getElementById(letter).style.color = "#F96FFF";
            document.getElementById(letter).style.opacity = "1";
        }
        function red(letter) {
            document.getElementById(letter).style.color = "#FF3939";
            document.getElementById(letter).style.opacity = "1";
        }
        function white(letter) {
            document.getElementById(letter).style.color = "whitesmoke";
            document.getElementById(letter).style.opacity = "0.3";
        }

        setTimeout(purpleDiv, 12000, 'G');
        setTimeout(purpleDiv, 12500, 'A');
        setTimeout(purpleDiv, 13000, 'L');
        setTimeout(purpleDiv, 13500, 'L2');
        setTimeout(purpleDiv, 14000, 'E');
        setTimeout(purpleDiv, 14500, 'R');
        setTimeout(purpleDiv, 15000, 'Y');

        function purpleDiv(letterDiv) {
            document.getElementById(letterDiv).style.backgroundColor = "#47788D";
            document.getElementById(letterDiv).style.color = "whitesmoke";
            setTimeout(backToBrown, 500);
            function backToBrown() {
                document.getElementById(letterDiv).style.backgroundColor = "brown";
            }
            setTimeout(transparentBackground, 4700);
            function transparentBackground() {
                document.getElementById(letterDiv).style.backgroundColor = "";
            }
        }

        setTimeout(showBeetlejuice, 11000);
        function showBeetlejuice() {
            document.getElementById("beetlejuice").className = "beetlejuiceAnimation1";
        }

        setTimeout(hideDiv, 20000, 'G');
        setTimeout(hideDiv, 20500, 'A');
        setTimeout(hideDiv, 21000, 'L');
        setTimeout(hideDiv, 21500, 'L2');
        setTimeout(hideDiv, 22000, "E");
        setTimeout(hideDiv, 22500, 'R');
        setTimeout(hideDiv, 23000, 'Y');

        function hideDiv(letterDiv) {
            document.getElementById(letterDiv).className = "";
            document.getElementById(letterDiv).className = "hideDivAnimation";
            setTimeout(remove, 2000, letterDiv);
        }

        setTimeout(show300, 23500);
        function show300() {
            document.getElementById("pics300").className = "";
            document.getElementById("pics300").className = "pics300Fall";
            setTimeout(killShow300, 8200);
            function killShow300() {
                document.getElementById("pics300").className = "";
                document.getElementById("pics300").className = "picInvisible";
            }
            setTimeout(showSpidermanAnimation2, 7800);
            function showSpidermanAnimation2() {
                document.getElementById("spiderman").className = "";
                document.getElementById("spiderman").className = "spidermanAnimation2";
            }
            setTimeout(showSpidermanAnimation3, 13000);
            function showSpidermanAnimation3() {
                document.getElementById("spiderman").className = "";
                document.getElementById("spiderman").className = "spidermanAnimation3";
            }
        }

        setTimeout(showSwipeIconAndSentence, 32200);
        function showSwipeIconAndSentence() {
            document.getElementById("swipeSentenceDiv").style.display = "block";
            document.getElementById("swipeIcon").style.display = "block";
            setTimeout(increaseOpacity, 200);
            function increaseOpacity() {
                document.getElementById("swipeSentenceDiv").style.opacity = "1";
                document.getElementById("swipeIcon").style.opacity = "1";
            }
        }
    

//INVITATION TO MINIATURES GALLERY////////////////////////////////////////////////////
        let invitationTemplate = document.getElementById('gallpic20').innerHTML;
        document.getElementById("gallpic50").innerHTML = invitationTemplate;
        document.getElementById("gallpic100").innerHTML = invitationTemplate;
        document.getElementById("gallpic150").innerHTML = invitationTemplate;
        document.getElementById("gallpic200").innerHTML = invitationTemplate;
        document.getElementById("gallpic250").innerHTML = invitationTemplate;
        document.getElementById("gallpic288").innerHTML = invitationTemplate;

//SWIPE/////////////////////////////////////////////////////////////////////////////////
        let middlePicNumber = 1; 
        let rightPicNumber = 2;
        let leftPicNumber = 309;
        let touchstartX = 0;
        let touchendX = 0;
        const swipeZone = document.getElementById("swipeArea");
        swipeZone.addEventListener('touchstart', function(event) {
            touchstartX = event.changedTouches[0].screenX;
        }, false);

        swipeZone.addEventListener('touchend', function(event) {
            touchendX = event.changedTouches[0].screenX;
            handleSwipe();
        }, false); 

        function handleSwipe() {
            setTimeout(remove, 200, "beetlejuice");
            if (touchendX < touchstartX) {
                document.getElementById(`gallpic${leftPicNumber}`).className = "";
                document.getElementById(`gallpic${leftPicNumber}`).className = "picInvisible";
                document.getElementById(`gallpic${middlePicNumber}`).className = "";
                document.getElementById(`gallpic${middlePicNumber}`).className = "picVisibleToLeft";
                document.getElementById(`gallpic${rightPicNumber}`).className = "";
                document.getElementById(`gallpic${rightPicNumber}`).className = "picHiddenToLeft";
                middlePicNumber = calcPicNumberAdding(middlePicNumber);
                rightPicNumber = calcPicNumberAdding(rightPicNumber);
                leftPicNumber = calcPicNumberAdding(leftPicNumber);
                function calcPicNumberAdding(currentPicNum) {
                    return currentPicNum !== 309 ? currentPicNum + 1 : 1;
                }
                touchstartX = 0;
                touchendX = 0;
            }
            else if (touchendX > touchstartX) {
                document.getElementById(`gallpic${rightPicNumber}`).className = "";
                document.getElementById(`gallpic${rightPicNumber}`).className = "picInvisible";
                document.getElementById(`gallpic${middlePicNumber}`).className = "";
                document.getElementById(`gallpic${middlePicNumber}`).className = "picVisibleToRight";
                document.getElementById(`gallpic${leftPicNumber}`).className = "";
                document.getElementById(`gallpic${leftPicNumber}`).className = "picHiddenToRight";
                middlePicNumber = calcPicNumberSubtracting(middlePicNumber);
                rightPicNumber = calcPicNumberSubtracting(rightPicNumber);
                leftPicNumber = calcPicNumberSubtracting(leftPicNumber);
                function calcPicNumberSubtracting(currentPicNum) {
                    return currentPicNum !== 1 ? currentPicNum - 1 : 309;
                }
                touchstartX = 0;
                touchendX = 0;
            }
        }

//MINI GALLERY/////////////////////////////////////////////////////////////////////////////////
    let miniGallIconsCollection = document.getElementsByClassName('miniGallIcon');
    for (let i = 0; i < miniGallIconsCollection.length; i++) {
        miniGallIconsCollection[i].addEventListener("touchstart", function(event) {
            if (event.changedTouches[0]) {
                enterMiniGallery();
            }
        }, false);
    }
    
    let exitMiniGallIcon = document.getElementById("exitMiniGalleryIcon");
    exitMiniGallIcon.addEventListener("touchstart", function(event) {
        if (event.changedTouches[0]) {
            exitMiniGallery();
        }
    }, false);

    function enterMiniGallery() {
        document.getElementById("miniGallery").style.display = "block";
        setTimeout(incrOpacity, 1);
        function incrOpacity() {
            document.getElementById("miniGallery").style.opacity = "1";
        }
    }

    function exitMiniGallery() {
        document.getElementById("miniGallery").style.opacity = "0";
        setTimeout(remove, 700, "miniGallery");
    }
    

    let touchstartYminigallery = 0;
    let touchendYminigallery  = 0;

    const miniaturesCollection = document.getElementsByClassName('miniature');
    for (let i = 0; i < miniaturesCollection.length; i++) {

        miniaturesCollection[i].addEventListener("touchstart", function(event) {
            touchstartYminigallery = event.changedTouches[0].screenY;
        }, false);

        miniaturesCollection[i].addEventListener("touchend", function(event) {
            touchendYminigallery = event.changedTouches[0].screenY;
            handleSwipeMinigallery(i);
        }, false);
    }

    function handleSwipeMinigallery(i) {
        if (touchstartYminigallery === touchendYminigallery) {
            showEnlargedPic(miniaturesCollection[i]);
            touchstartYminigallery = 0;
            touchendYminigallery = 0;
        }
    }


    const cross = document.getElementById("exitEnlargedPicIcon");
        cross.addEventListener("touchstart", function(event) {
            if (event.changedTouches[0]) {
                document.getElementById('enlargedPictureDiv').style.display = 'none';
            }
        }, false);

        const crossAuthor = document.getElementById("exitEnlargedPicIconAuthor");
        crossAuthor.addEventListener("touchstart", function(event) {
            if (event.changedTouches[0]) {
                document.getElementById('gallpic30').className = 'picInvisible';
                remove('exitEnlargedPicIconAuthor');
            }
        }, false);

    function showEnlargedPic(pic) {
        if (pic.id !== 'miniature30') {
            document.getElementById('largeImage').src = pic.src;
            document.getElementById('enlargedPictureDiv').style.display = 'block';
        }
        else {
            document.getElementById('gallpic30').className = 'visibleAuthor';
            document.getElementById('exitEnlargedPicIconAuthor').style.display = "block";
     
        }
    }

});
