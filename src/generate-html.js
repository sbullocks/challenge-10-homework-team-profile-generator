function generateSite(team) {
  const html = [];

  // The below sections houses the generate HTML for each of the worker roles.
  function generateManager(manager) {
    let managerHtml = `
        <div class="card col-10 col-lg-2">
                        <div class="card-header">
                            ${manager.getName()}, ${manager.getRole()}
                            <i class="fa-solid fa-building-circle-check"></i>
                            </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${manager.getId()}</li>
                                <li class="list-group-item">Email: <span id='email'><a href='mailto:${manager.getEmail()}'> ${manager.getEmail()}</a></span></li>
                                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>
                `;
    html.push(managerHtml);
  }
  // Included Font Awesome for graphic icons.
  function generateEngineer(engineer) {
    let engineerHtml = `
        <div class="card col-10 col-lg-2">    
                        <div class="card-header">
                            ${engineer.getName()}, ${engineer.getRole()}
                            <i class="fa-solid fa-helmet-safety"></i>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${engineer.getId()}</li>
                                <li class="list-group-item">Email: <span id='email'><a href='mailto:${engineer.getEmail()}'> ${engineer.getEmail()}</a></span></li>
                                <li class="list-group-item">GitHub: <span id='email'><a target='_blank' href='https://github.com/${engineer.getGithub()}'> ${engineer.getGithub()}</a></span></li>
                            </ul>
                        </div>
                    </div>
                `;
    html.push(engineerHtml);
  }

  function generateIntern(intern) {
    let internHtml = `
        <div class="card col-10 col-lg-2">
                        <div class="card-header">
                            ${intern.getName()}, ${intern.getRole()}
                            <i class="fa-sharp fa-solid fa-user-graduate"></i>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${intern.getId()}</li>
                                <li class="list-group-item">Email: <span id='email'><a href='mailto:${intern.getEmail()}'> ${intern.getEmail()}</a></span></li>
                                <li class="list-group-item">School: ${intern.getSchool()}</li>
                            </ul>
                        </div>        
                    </div>
        `;
    html.push(internHtml);
  }

  // This will loop through each of the worker roles.
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      generateIntern(team[i]);
    }
  }

  return html.join("");
}

module.exports = (team) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Generator</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
        <link rel="stylesheet" href="../dist/styles.css" />
      </head>
      <body>
        <!-- Implemented bootstrap for framework layout. -->
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="team"><b>My Team</b></h1>
          </div>
        </div>
    
        <div class="d-flex justify-content-center">
          <div class="row container-fluid">
            ${generateSite(team)}
    
                </div>
        </div>    
              
    </body>
    <footer> This was created by Stephen B. </footer>
    </html>`;
};
