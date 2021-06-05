export default interface Config{ 
    youtube: {
        key: string,
        salesforce: {
            channelID: string
        }
    },
    app: {
        port: string | number
    }
}