
function createTodo(){
    //console.log("Creating a ToDo");
    //var text=document.getElementById("txtTodo").value;
    var text = $("#txtTodo").val();
  

    //document.getElementById("txtTodo").value();
    $("#txtTodo").val("");

    // create li inside ul
    var li ="<li>" + text + "</li>";
    //console.log(li);

    $("#pendingList").append(li);

    //set the focus back to the input field
    $("#txtTodo").focus();

    

}



function init(){
    console.log("Init of Todo app");


    // By Id
    //document.getElementById("btnSave").onclick = createTodo;
    $("#btnSave").click(createTodo);

/*     //By Tag
    document.getElementsByTagName("button");
    $("button")

    //By Class
    document.getElementsByClassName("create-form");
    $(".create-form") */


}


// when the browser finish rendering my html
// execute the init function
window.onload = init;