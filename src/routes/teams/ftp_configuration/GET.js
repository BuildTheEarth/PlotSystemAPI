export  async function initRoutes(app, joi, plotSystem) {

    app.get('/api/teams/:apikey/ftp_configuration', function (req, res) {

        // Validate that the API key is a valid GUID
        if(!plotSystem.validateAPIKey(joi, req, res))
            return;

        
        const buildTeam = plotSystem.getBuildTeam(req.params.apikey);
        const map = buildTeam.getFTPConfiguration();

        res.setHeader('Content-Type', 'application/json');
        res.send(Object.fromEntries(map))
    })

}