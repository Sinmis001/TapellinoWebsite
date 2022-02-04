// Catch those evil errors which will stop the website from loading properly & hiding errors from the user 
function errorcatcher(functionchecker) {
    try {
        functionchecker();
    }
    catch(error) {
        console.error(error);
    }
}