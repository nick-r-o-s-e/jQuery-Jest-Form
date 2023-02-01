const toggleErrorLabel = (
  divClass: string,
  action: "add" | "remove",
  message?: string
) => {
  const div = $(divClass);
  //ADDING//
  if (action == "add") {
    //ADD ONLY IF NOT ALREADY THERE//
    if (!div.find(".error-label").length) {
      div.append($("<div>").addClass("error-label").html(message));
    }
    //REMOVING//
  } else {
    $(div).find(".error-label").remove();
  }
};

export default toggleErrorLabel;
