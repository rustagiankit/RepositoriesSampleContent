param workspace string

@description('Unique id for the scheduled alert rule')
@minLength(1)
param analytic_id string = '227bc6a9-c410-4862-ac5a-dd3e2ff14a60'

resource workspace_Microsoft_SecurityInsights_analytic_id 'Microsoft.OperationalInsights/workspaces/providers/alertRules@2020-01-01' = {
  name: '${workspace}/Microsoft.SecurityInsights/${analytic_id}'
  kind: 'Scheduled'
  location: resourceGroup().location
  properties: {
    description: 'This query searches for failed attempts to log into the Okta console from more than 15 various users within a 5 minute timeframe from the same source. This is a potential indication of a password spray attack'
    displayName: 'TestRule1'
    enabled: false
    query: '\nlet FailureThreshold = 15;\nlet FailedEvents = Okta_CL\n| where eventType_s =~ "user.session.start"and outcome_reason_s in ("VERIFICATION_ERROR","INVALID_CREDENTIALS")\n| summarize dcount(actor_alternateId_s) by client_ipAddress_s, bin(TimeGenerated, 5m)\n| where dcount_actor_alternateId_s > FailureThreshold\n| project client_ipAddress_s, TimeGenerated;\nOkta_CL\n| where eventType_s =~ "user.session.start"and outcome_reason_s in ("VERIFICATION_ERROR","INVALID_CREDENTIALS")\n| summarize Users = make_set(actor_alternateId_s) by client_ipAddress_s, City = client_geographicalContext_city_s, Country = client_geographicalContext_country_s, bin(TimeGenerated, 5m)\n| join kind=inner (FailedEvents) on client_ipAddress_s, TimeGenerated\n| sort by TimeGenerated desc\n| extend timestamp = TimeGenerated, IPCustomEntity = client_ipAddress_s\n'
    queryFrequency: 'PT1H'
    queryPeriod: 'PT1H'
    severity: 'Medium'
    suppressionDuration: 'PT1H'
    suppressionEnabled: false
    triggerOperator: 'GreaterThan'
    triggerThreshold: 0
    tactics: [
      'CredentialAccess'
    ]
  }
}
