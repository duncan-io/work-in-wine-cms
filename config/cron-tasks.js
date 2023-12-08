module.exports = {
    "0 0 * * *": async ({strapi}) => {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

        const expiredJobs = await strapi.entityService.findMany("api::job.job", {
           filters: {createdAt: thirtyDaysAgo},
        })

        for (let job of expiredJobs){
            await strapi.entityService.update("api::job.job", job.attributes.jobAge.data.attributes.ageOfJob = 3)
        }

    // myJob:{
    //     task: async ({strapi}) => {
    //         const thirtyDaysAgo = new Date();
    //         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    //         const expiredJobs = await strapi.entityService.findMany("api::job.job", {
    //            filters: {createdAt: thirtyDaysAgo},
    //         })

    //         for (let job of expiredJobs){
    //             await strapi.entityService.update("api::job.job", job.attributes.jobAge.data.attributes.ageOfJob = "3")
    //         }
    //     }
    // },

    // options: {
    //     rule: "0 0 * * *",
    }
}