

$(document).ready(function() {
    $("input[name$='projects']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#Project" + test).show();
    });
});

$(document).ready(function() {
    $("input[name$='Project1']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#LargeProject" + test).show();
    });
});