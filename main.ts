import { App, Editor, MarkdownView, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface CriticMarkupSettings {
	// Add any settings here if needed in the future
}

const DEFAULT_SETTINGS: CriticMarkupSettings = {
	// Add default settings here if needed in the future
}

export default class CriticMarkupPlugin extends Plugin {
	settings: CriticMarkupSettings;

	async onload() {
		await this.loadSettings();

		// Register the post processor for CriticMarkup
		this.registerMarkdownPostProcessor((element, context) => {
			this.processCriticMarkup(element);
		});
	}

	processCriticMarkup(element: HTMLElement) {
		const walker = document.createTreeWalker(
			element,
			NodeFilter.SHOW_TEXT,
			null
		);

		const nodesToProcess: Text[] = [];
		while (walker.nextNode()) {
			nodesToProcess.push(walker.currentNode as Text);
		}

		for (const node of nodesToProcess) {
			let content = node.textContent || '';
			
			// Process additions
			content = this.processAdditions(content);
			
			// Process deletions
			content = this.processDeletions(content);
			
			// Process comments
			content = this.processComments(content);
			
			// Process highlights
			content = this.processHighlights(content);
			
			// Process substitutions
			content = this.processSubstitutions(content);

			if (content !== node.textContent) {
				const temp = document.createElement('div');
				temp.innerHTML = content;
				node.replaceWith(...Array.from(temp.childNodes));
			}
		}
	}

	private processAdditions(text: string): string {
		return text.replace(/\{\+\+(.*?)\+\+\}/g, '<span class="critic-addition">$1</span>');
	}

	private processDeletions(text: string): string {
		return text.replace(/\{--(.*?)--\}/g, '<span class="critic-deletion">$1</span>');
	}

	private processComments(text: string): string {
		return text.replace(/\{>>(.*?)<<\}/g, '<span class="critic-comment">$1</span>');
	}

	private processHighlights(text: string): string {
		return text.replace(/\{==(.*?)==\}/g, '<span class="critic-highlight">$1</span>');
	}

	private processSubstitutions(text: string): string {
		return text.replace(/\{~~(.*?)~>(.*?)~~\}/g, '<span class="critic-substitution"><span class="critic-deletion">$1</span><span class="critic-addition">$2</span></span>');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
