import request from "@/api/request";

export async function getSetting() {
    return await request.get("/api/setting").then(res=>{
        return res.data.data
    })
}
