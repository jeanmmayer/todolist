export const environment = {
	production: false,
	apiUrl: 'https://tasks-homolog.k8s-platform-dev-us-east-1.fluig.io/tasks/api/v2',
	generateTokenUrl: 'https://api-fluig.staging.totvs.app/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=yourusername&password=yourpassword', // Substituir 'yourusername' e 'yourpassword'
	authGenerateToken: 'Basic xxxxxxxx' // Authorization header
};
