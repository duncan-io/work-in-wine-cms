module.exports = {

    // Change jobs from "New" to "Valid" after they have been live for 3 days, once every night at midnight
    "0 0 * * *": async ({strapi}) => {
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(thirtyDaysAgo.getDate() - 3)

        const expiredJobs = await strapi.entityService.findMany("api::job.job", {
           filters: {createdAt: three},
        })

        for (let job of expiredJobs){
            await strapi.entityService.update("api::job.job", job.attributes.jobAge.data.attributes.ageOfJob = 2)
        }
    },

    //Change jobs from "valid" to "expired" after they have been live for 30 days, once every night/morning at 1am
    "0 1 * * *": async ({strapi}) => {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

        const expiredJobs = await strapi.entityService.findMany("api::job.job", {
           filters: {createdAt: thirtyDaysAgo},
        })

        for (let job of expiredJobs){
            await strapi.entityService.update("api::job.job", job.attributes.jobAge.data.attributes.ageOfJob = 3)
        }
    }
    
}