$.ajax({
    url: '../../ad/ad.json',
    DataType: 'json',
    type: 'get',
    cache: false,
    success: function(data){
        $(data.Ad).each(function(index, value){
            console.log(value.Title);
            $("#ad_title").text(value.Title);

            console.log(value.Description);
            $("#ad_description").text(value.Description);

            console.log(value.LinkText);
            $("#ad_link").text(value.LinkText);

            console.log(value.Link);
            $("#ad_link").prop("href", value.Link);
        })
    }
})