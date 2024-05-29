export const footerConfig:{header:string,links:{ label: string; redirectTo: string, type?: "other" | "direction"|"mail"|"phone"; icon?: string }[]}[]=[
    {
        header:"Quick Links",
        links:[{label:"Home",redirectTo:""},{label:"About Us",redirectTo:""},{label:"Contact Us",redirectTo:""}]
    },
    {
        header:"Products",
        links:[{label:"Home",redirectTo:""},{label:"About Us",redirectTo:""},{label:"Contact Us",redirectTo:""}]
    },{
        header:"Company",
        links:[{label:"Plot No.98, 09, 100 Feet Rd, Ghitorni, New Delhi, Delhi 110030",redirectTo:"17.308564970871%2C80.154576301575",icon:"/assets/svgs/direction.svg",type:"direction"},{label:"bhupeshbhaskar21@gmail.com",redirectTo:"bhupeshbhaskar21@gmail.com",icon:"/assets/svgs/mail.svg",type:"mail"},{label:"098110 01353",redirectTo:"098110 01353",type:"phone",icon:"/assets/svgs/phone.svg"}]
    }
]