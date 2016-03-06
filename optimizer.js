function filepicked()
{
  var input = document.querySelector("#inp-file");

  var files = input.files;

  var message = document.querySelector("#p-select-file");
  var button = document.querySelector("#btn-optimize");
  var spinner = document.querySelector("#div-spinner");
  var divdownload = document.querySelector("#div-download");

  spinner.className = "hidden";
  divdownload.className = "hidden";

  if(files.length !== 1)
  {
    message.className = "";
    button.className = "hidden";
    return;
  }

  message.className = "hidden";
  button.className = "";
}

function optimize()
{
    var input = document.querySelector("#inp-file");

    var files = input.files;

    if(files.length !== 1)
    {
      return;
    }

    var message = document.querySelector("#p-select-file");
    var button = document.querySelector("#btn-optimize");
    var download = document.querySelector("#a-download");
    var spinner = document.querySelector("#div-spinner");
    var divdownload = document.querySelector("#div-download");

    var file = files[0];

    var name = file.name;


    var split = name.split('.');

    if(split.length > 1)
    {
      var extension = split.pop();

      name = split.pop();

      name += "-optimized";

      split.push(name);

      split.push(extension);

      name = split.join(".");
    }
    else {
      if(split.length === 0)
      {
        name = "source.js"; //Because you can't have a more optimized source than javascript.
      }
      else {
        name = name + ".js";
      }
    }

    spinner.className = "";

    setTimeout(function(){

    var optimizedContent = ["// Your code has been fully optimized."];

    var blob = new Blob(optimizedContent, {type: "text/text"});

    var url = URL.createObjectURL(blob);

    download.href = url;
    download.download = name;

    divdownload.className = "";
    spinner.className = "hidden";

    console.log("optimized!");
    }, 3000);
}
