$.ajax({
    url: 'Content.json',
    DataType: 'json',
    type: 'get',
    cache: false,
    success: function(data){
        $(data.Content).each(function(index, value){
            console.log(value.Title);
            $("#Title_word").text(value.Title);

            console.log(value.Description);
            $("#Description").text(value.Description);

            console.log(value.Image);
            $("#image").attr("src", value.Image);
        })
    }
})