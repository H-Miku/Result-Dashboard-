document.addEventListener("DOMContentLoaded", function () {
   
   const electionData = JSON.parse(localStorage.getItem("electionData")) || {}; 

   
   let totalVotes = 0;
   let partyVotes = {}; 

   for (const electionType in electionData) {
      for (const position in electionData[electionType]) {
         const candidates = electionData[electionType][position];
         candidates.forEach(candidate => {
            totalVotes += candidate.votes;
            if (!partyVotes[candidate.party]) {
               partyVotes[candidate.party] = 0;
            }
            partyVotes[candidate.party] += candidate.votes;
         });
      }
   }

   
   const totalVotesElement = document.getElementById("totalVotes");
   if (totalVotesElement) {
      totalVotesElement.innerText = totalVotes;
   }

   
   const registeredVoters = 100; 
   const allocatedVotes = totalVotes;
   const unregisteredVotes = registeredVoters - allocatedVotes;

   
   const ballotsColors = allocatedVotes === 0 ? ["#d3d3d3", "#d3d3d3"] : ["#2196F3", "#8F00FF"];

   // sustom plugin for center text 
   const centerTextPlugin = {
      id: "centerText",
      beforeDraw(chart) {
         const { width, height } = chart;
         const ctx = chart.ctx;
         ctx.save();

         const fontSize = (Math.min(width, height) / 8).toFixed(2);
         ctx.font = `${fontSize}px sans-serif`;
         ctx.textAlign = "center";
         ctx.textBaseline = "middle";

         const percentage = allocatedVotes === 0 ? "0.0%" : ((allocatedVotes / registeredVoters) * 100).toFixed(2) + "%";
         ctx.fillText(percentage, width / 2 - width / 4.6, height / 2);
         ctx.restore();
      }
   };

   // Create Ballots Chart
   const ballotsCtx = document.getElementById("ballotsChart").getContext("2d");
   const ballotsChart = new Chart(ballotsCtx, {
      type: "doughnut",
      data: {
         labels: ["Allocated Votes", "Unregistered Votes"],
         datasets: [
            {
               data: allocatedVotes === 0 ? [1, 1] : [allocatedVotes, unregisteredVotes],
               backgroundColor: ballotsColors
            }
         ]
      },
      options: {
         responsive: true,
         aspectRatio: 3.1,
         layout: {
            padding:{
               left:2
            }
         },
         plugins: {
            legend: {
               position: "right",
               labels: {
                  boxWidth: 15,
                  font: {
                     size: 17
                  }
               }
            }
         }
      },
      plugins: [centerTextPlugin]
   });

   //  data for the party chart
   let partyLabels = Object.keys(partyVotes);
   let partyData = partyLabels.map(party => partyVotes[party]);

   
   if (partyLabels.length === 0 || totalVotes === 0) {
      partyLabels = ["No-Data"];
      partyData = [1]; 
   }

   // custom plugin for center text
   const partyCenterTextPlugin = {
      id: "partyCenterText",
      beforeDraw(chart) {
         const { width, height } = chart;
         const ctx = chart.ctx;
         ctx.save();

         const fontSize = (Math.min(width, height) / 8).toFixed(2);
         ctx.font = `${fontSize}px sans-serif`;
         ctx.textAlign = "center";
         ctx.textBaseline = "middle";

         const centerText = totalVotes === 0 ? "0.0%" : `${((partyData[0] / totalVotes) * 100).toFixed(2)}%`;
         ctx.fillText(centerText, width / 2 - width / 4.9, height / 2);
         ctx.restore();
      }
   };

   //  Party Votes Chart
   const turnoutCtx = document.getElementById("turnoutChart").getContext("2d");
   const turnoutChart = new Chart(turnoutCtx, {
      type: "doughnut",
      data: {
         labels: partyLabels,
         datasets: [
            {
               data: partyData,
               backgroundColor: totalVotes === 0 ? ["#d3d3d3"] : ["#FF5733", "#33FF57", "#3357FF", "#FF33A5", "#FFC300"]
            }
         ]
      },
      options: {
         responsive: true,
         aspectRatio: 3.1,
         layout: {
            padding: {
               top: 0,
               bottom: 0,
               left: 0,
               right: 70
            }
         },
         plugins: {
            legend: {
               position: "right",
               labels: {
                  boxWidth: 15,
                  font: {
                     size: 17
                  }
               }
            }
         }
      },
      plugins: [partyCenterTextPlugin]
   });
});