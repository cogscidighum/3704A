<html lang="en-us">
<head>
  <button id="run">Click to Check</button>
  <h3>Output:</h3>
  <div id="output2">Waiting_to_be_analyse</div>
</head>
<body>
  <script type="module">
    import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.7.0';
    import { client } from "https://cdn.jsdelivr.net/npm/@gradio/client@0.1.4/dist/index.min.js";

    const generate = document.getElementById("run");
    generate.addEventListener("click", async () => {
      try {
        env.useBrowserCache = false;
        env.allowLocalModels = false;

        let pipe = await pipeline('text-classification');

        // Updated celscilist with "Daniel Kahneman" and views and link
        const celscilist = {
          'Daniel Kahneman': { 'info': { 'views': 1200000, 'link': "https://www.youtube.com/watch?v=XgRlrBl-7Yg" } },
          'dd': { 'info': { 'views': 126000, 'link': "https://youtu.be/IZefk4gzQt4"} },
          'jp': { 'info': { 'views': 952791, 'link': "https://youtu.be/3Pup-XSH98o" } },
          'Mihaly Csikszentmihalyi': { 'info': { 'views': 952791, 'link' : " https://www.youtube.com/watch?v=fXIeFJCqsPs"} },
          'Donald Hoffman': { 'info': { 'views': 2400000,'link' : " https://www.youtube.com/watch?v=oYp5XuGYqqY" } },
          'Janelle Shane': { 'info': { 'views': 2700000,'link' : " https://www.youtube.com/watch?v=OhCzX0iLnOc&t=85s" } },
          'Patricia Churchland': { 'info': { 'views': 8026 ,'link' : " https://www.youtube.com/watch?v=LJ7szK1Rz4w" } },
          'Bret Weinstein': { 'info': { 'views': 41610, 'link' : "https://www.youtube.com/watch?v=YeucEiOKdiM" } },
          'Andrew Huberman': { 'info': { 'views': 55561,'link' : "https://www.youtube.com/watch?v=-xf9pCcVOp4&t=76s&ab"  } },
          
          'Tom Scott': { 'info': { 'views': 2500000,'link' : "https://www.youtube.com/watch?v=leX541Dr2rU"  } },
          'Dr. Andrew Huberman': { 'info': { 'views': 556000, 'link' : "https://www.youtube.com/watch?v=NqMTqy4X6h0"  } },
          'Melanie Mitchell': { 'info': { 'views': 44000,'link' : "https://www.youtube.com/watch?v=cz1UfjZjjyk&t=112s"  } },
          'Jordan Peterson': { 'info': { 'views': 236000,'link' : "https://www.youtube.com/watch?v=hvazKjYe_6k"  } },
          'Timnit Gebru': { 'info': { 'views': 79338 ,'link' : "https://www.youtube.com/watch?v=PWCtoVt1CJM"  } },
          'Amy Cuddy': { 'info': { 'views': 23700189 ,'link' : "https://www.youtube.com/watch?v=Ks-_Mh1QhMc" } },
          'Elizabeth Loftus': { 'info': { 'views': 2190333,'link' : "https://www.youtube.com/watch?v=PB2OegI6wvI"  } },
          'Martha Nussbaum': { 'info': { 'views': 40000,'link' : "https://www.youtube.com/watch?v=0UmWoqhkJdU"  } },
          'Elizabeth Loftus': { 'info': { 'views': 17000 ,'link' : "https://www.youtube.com/watch?v=0UmWoqhkJdU" } },
          ' Dr Russell A Barkley': { 'info': { 'views': 774000 ,'link' : "https://www.youtube.com/watch?v=wg6cfsnmqyg" } },
          'Slavoj Žižek': { 'info': { 'views': 95000,'link' : "https://www.youtube.com/watch?v=sG257cOOnw0"  } },
          'Nathaniel Drew': { 'info': { 'views': 126000 ,'link' : "https://www.youtube.com/watch?v=LzJfPjTkrW8" } },
          'Noam Chomsky': { 'info': { 'views': 26042,'link' : "https://www.youtube.com/watch?v=-NMR5JXp37k"  } },
          'Lara Boyd': { 'info': { 'views': 38000000,'link' : "https://www.youtube.com/watch?v=LNHBMFCzznE"  } },
          'Howard Gardner': { 'info': { 'views': 15000000,'link' : "https://www.youtube.com/watch?v=oY2C4YgXm7I"  } },
          'Yuval Noah Harari': { 'info': { 'views': 409000,'link' : "https://www.youtube.com/watch?v=1rtS2OEV6bM"  } },
          'Jordan Peterson': { 'info': { 'views': 672531,'link' : "https://www.youtube.com/watch?v=YG4Y6s_sFmg&t=327s"  } },
          'Yuval Noah Harari': { 'info': { 'views': 15000000,'link' : "https://www.youtube.com/watch?v=1rtS2OEV6bM"  } },
          'Marc Andreessen ' : { 'info': { 'views': 15000000,'link' : "https://www.youtube.com/watch?v=-hxeDjAxvJ8"  } },
          'Lex Fridman': { 'info': { 'views': 493000,'link' : "https://www.youtube.com/watch?v=e8qJsk1j2zE"  } },
          'Poppy Crum ': { 'info': { 'views': 130000,'link' : "https://www.youtube.com/watch?v=SYytiQmXNTc"  } },
          'Ryan Holiday': { 'info': { 'views': 32000,'link' : "https://www.youtube.com/watch?v=7a-_SElFFN0"  } },
          'Jim Davies': { 'info': { 'views': 27000,'link' : "https://www.youtube.com/watch?v=TdTP3LKyf4s"  } },
          'Marvin Chun': { 'info': { 'views': 39300 ,'link' : "https://www.youtube.com/watch?v=97iYdJE9mQ4&t=713s"  } },
        };
          
        let output = await pipe('Every moment in your life is a decision waiting to be made. Daniel Kahneman is a psychologist and an economist. His famous notable works relate to the psychology of judgment and decision thinking. The first YouTube video “Thinking Fast and Slow l Daniel Kahneman” was posted by Long Now Foundation, which is an American non-profit organization that advocates for  “slower/better” thinking versus the “faster and cheaper” mentality. Long Now Foundation invited Daniel Kahneman to give his talk about his book - “Thinking, Fast and Slow”  which was published in 2011. He introduced the dual-process model of System 1 and System 2. In the second video, he talks about how cognitive traps can influence the way we think about “happiness”.');

        // Extract 'views' values into an array
        const viewsArray = Object.values(celscilist).map(item => item.info.views);

        // Calculate the sum of 'views' values
        function calculateAverage(viewsArray) {
          const sum = viewsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
          return sum / viewsArray.length;
        }

        class Celsci {
          static iscelsci(x) {
            let y = "Not Above Average: ";
            if (x > calculateAverage(viewsArray)) {
              y = "Above Average: ";
            }
            return y;
          }

          static iscelscinow(x) {
            let y = "Not Above Average: ";
            if (x > calculateAverage(viewsArray)) {
              y = "Above Average: ";
            }
            return y;
          }
        }

        function checkcelsci(x) {
          const result = Celsci.iscelsci(celscilist[x]['info']['views']);
          return result;
        }

        const app = await client("https://cognitivescience-cogsphere.hf.space");
        const lastview = await app.predict("/predict", [celscilist["Daniel Kahneman"]['info']['link']]);

        // Get the max value from the array
        const maxViews = Math.max(...viewsArray);

        function findKeyByViews(obj, viewsValue) {
          return Object.keys(obj).find(key => obj[key].info.views === viewsValue);
        }

        // Call the function with data and maxViews as arguments
        let no1 = findKeyByViews(celscilist, maxViews);

        document.write("Daniel Kahneman's video with views: ", celscilist["Daniel Kahneman"]['info']['views'], " is: ", checkcelsci('Daniel Kahneman'), Math.trunc(calculateAverage(viewsArray)), " Among all other Celebrity Scientist's Youtube videos the #1 is: ", no1, " with viewcounts of ", maxViews, " but Daniel Kahneman sentiment result is ", JSON.stringify(output), " with latest views: ", lastview.data);
      } catch (error) {
        console.log("Error:", error.message);
      }
    })
  </script>
</body>
</html>
