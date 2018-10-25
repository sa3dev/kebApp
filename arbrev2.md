src/
    core/
        personnage/
            personnage.model
            personnage.service
                use api.service
            personnage.module
        api/
            api.service
                use httpClient
        user/
            components/
                login.component
                userbar.component
            user.model
            user.service            
            user.module
        core.module
    jedi/
        components/
            jedi.list.component
            jedi.component
            jedi.popin
        jedi.model
            extend personnage.model
        jedi.service
            use personnage.service
        jedi.module
        jedi.route
    sith/
        components/
            sith.list.component
            sith.component
            sith.popin
        sith.model
            extend personnage.model
        sith.service
            use personnage.service
        sith.module
        sith.route
    shared
        components/
            layout.component
            modal.component
            flex.dualcol.component
        pipes/
            date.pipe
        directives/
            
        shared.module