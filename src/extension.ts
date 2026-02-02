import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "vscode-image-copy-to-clipboard-webview" is now active!');

	const disposable = vscode.commands.registerCommand('vscode-image-copy-to-clipboard-webview.showImage', () => {
		const panel = vscode.window.createWebviewPanel(
			'imageView',
			'Image Viewer',
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);

		panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent() {
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Image Viewer</title>
	<style>
		body {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			margin: 0;
			background-color: #1e1e1e;
		}
		img {
			max-width: 100%;
			height: auto;
		}
	</style>
</head>
<body>
	<img src="https://placehold.co/600x400.png" alt="Placeholder Image" />
</body>
</html>`;
}

export function deactivate() {}
