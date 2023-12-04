module.exports = (config, { strapi })=> {
    return (ctx, next) => {
      console.log(ctx.body)
      // const currentDate = new Date()
      // const daysDifference = (jobDate) =>{
      //  const result = (currentDate - jobDate) / (1000 * 60 * 60 * 24)
      //  return result
      // }
      //   ctx.data.forEach(job => {
      //     let daysOld = daysDifference(job.attributes.date)
      //     if (daysOld > 30){
      //       job.attributes.jobAge.data.attributes.ageOfJob = "Expired"
      //     } else if (daysOld < 30 && daysOld >= 3){
      //       job.attributes.jobAge.data.attributes.ageOfJob = "Valid"
      //     }
      //   })

        next();
    };
  };