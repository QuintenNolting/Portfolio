<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Portfolio</title>
        <link href="projects.css" rel="stylesheet">
    </head>
    <body>
    <div id="tablist">
        <button class="tab popovertab" popovertarget="tabinfo"><img src="ik592025.ico" height="100%"></button>
        <button class="tab popovertab" popovertarget="tabskills"><img src="ik592025.ico" height="100%"></button>
        <button class="tab popovertab"><img src="ik592025.ico" height="100%"></button>
        <button class="tab popovertab" popovertarget="tabcv"><img src="ik592025.ico" height="100%"></button>
        <button class="tab popovertab" popovertarget="tabcontact"><img src="ik592025.ico" height="100%"></button>
    </div>

    <div id="activetablist">
        <div class="tab activetab"></div>
        <div class="tab activetab"></div>
        <div class="tab activetab"></div>
        <div class="tab activetab"></div>
        <div class="tab activetab"></div>
    </div>

<div id="tabinfo" popover="manual">1</div>
<div id="tabskills" popover="manual">2</div>
<div id="tabcv" popover="manual">4</div>
<div id="tabcontact" popover="manual">5</div>

        <div id="projectlist">
            <div class="project"></div>
            <div class="project"></div>
            <div class="project"></div>
            <div class="project"></div>
            <div class="project"></div>
        </div>

        <progress id="amountscrolled" value="0"></progress>

        <script src="projects.js"></script>
    </body>
</html>
