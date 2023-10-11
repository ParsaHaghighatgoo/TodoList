//jshnit esversion:6

exports.getDate = function (){

    var today = new Date();
    const options = {weekday : "long", day:"numeric", month: "long"};
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    return today.toLocaleDateString("en-US", options);  
};



