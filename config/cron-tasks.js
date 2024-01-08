module.exports = {

    // Change jobs from "New" to "Valid" after they have been live for 3 days, once every night at midnight
    //Needs some help, trying to get it to go between 3 and 29 days ago
    "0 0 * * *": async ({strapi}) => {
        let threeDaysAgo = new Date();
        let fourDaysAgo = new Date() ;
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        fourDaysAgo.setDate(fourDaysAgo.getDate() - 4);
       
        const oldJobs = await strapi.entityService.findMany('api::job.job', {
           filters: {
            createdAt: {
                $between:[fourDaysAgo,threeDaysAgo]
               
            }
        },
        });

        console.log(oldJobs, "Old Jobs")

        for (let job of oldJobs){
            console.log(job)
            await strapi.entityService.update("api::job.job",job.id, {
                data:{
                    jobAge:{
                        set:[{id:2}]
                    },
        }
    })
        }
    },

    //Change jobs from "valid" to "expired" after they have been live for 30 days, once every night/morning at 1am
    "0 1 * * *": async ({strapi}) => {
        const thirtyDaysAgo = new Date();
        const thirtyOneDaysAgo = new Date()
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
        thirtyOneDaysAgo.setDate(thirtyOneDaysAgo.getDate() - 31)
        console.log(thirtyDaysAgo)
        const expiredJobs = await strapi.entityService.findMany("api::job.job", {
            filters: {
                createdAt: {
                    $between: [thirtyOneDaysAgo, thirtyDaysAgo]
                }
            },
        })

        for (let job of expiredJobs){
            await strapi.entityService.update("api::job.job",job.id, {
                data:{
                    jobAge:{
                        set:[{id:3}]
                    },
        }
    })
        }
    }
    
}