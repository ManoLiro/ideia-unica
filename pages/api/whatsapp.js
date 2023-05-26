import dynamic from "next/dynamic";

function whatsapp(request,response){
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.ToGMTString()
    });
}

export default whatsapp;