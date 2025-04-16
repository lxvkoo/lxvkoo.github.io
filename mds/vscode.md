{
	// Основные настройки редактора
	"window.openFilesInNewWindow": "off",
	"editor.tabSize": 4,
	"editor.folding": false,
	"editor.insertSpaces": false,
	"editor.smoothScrolling": true,
	"editor.minimap.enabled": false,
	"editor.detectIndentation": true,
	"editor.suggestSelection": "first",
	"editor.multiCursorModifier": "ctrlCmd",

	// Настройки переноса слов
	"editor.wrappingIndent": "same",
	"editor.wordWrapColumn": 80,

	// Прокрутка за пределы последней строки
	"editor.scrollBeyondLastLine": true,

	// Связанные редактирования тегов
	"editor.linkedEditing": true,

	// Автоматическое закрытие тегов
	"html.autoClosingTags": true,
	"javascript.autoClosingTags": true,
	"typescript.autoClosingTags": true,

	// Отображение символов
	"editor.renderControlCharacters": false,

	// Подсветка неоднозначных символов
	"editor.unicodeHighlight.ambiguousCharacters": false,

	// Внешний вид
	"editor.bracketPairColorization.enabled": false,
	"editor.glyphMargin": false,
	"window.density.editorTabHeight": "compact",
	"editor.accessibilitySupport": "off",
	"workbench.layoutControl.enabled": false,
	"workbench.editor.editorActionsLocation": "hidden",
	"workbench.editor.empty.hint": "hidden",

	// Настройки курсора
	"editor.cursorBlinking": "expand",
	"editor.cursorStyle": "line-thin",
	"editor.cursorSmoothCaretAnimation": "explicit",

	// Настройки шрифта
	// "editor.fontSize": 18,
	"editor.fontSize": 19,
	"editor.lineHeight": 28.5,
	"editor.fontWeight": "400",
	"editor.fontLigatures": true,
	"editor.fontFamily": "IBM Plex Mono, JetBrains Mono, Ubuntu Mono, Geist Mono, Fira Code, monospace",
	"editor.inlayHints.fontFamily": "JetBrains Mono",
	"chat.editor.fontFamily": "JetBrains Mono",
	"editor.codeLensFontFamily": "JetBrains Mono",
	"debug.console.fontFamily": "JetBrains Mono",

	// Кастомизация подсветки синтаксиса
	"editor.tokenColorCustomizations": {
		"textMateRules": [
			{
				"scope": [
					"comment",
					"entity.name.type.class",
					"keyword",
					"constant",
					"storage.modifier",
					"storage.type.class.js"
				],
				"settings": {
					"fontStyle": "italic"
				}
			},
			{
				"scope": [
					"invalid",
					"keyword.operator",
					"constant.numeric.css",
					"keyword.other.unit.px.css",
					"constant.numeric.decimal.js",
					"constant.numeric.json"
				],
				"settings": {
					"fontStyle": ""
				}
			}
		]
	},

	// Настройки терминала
	"terminal.integrated.fontFamily": "PragmataPro Liga",
	"terminal.integrated.fontSize": 13,
	"terminal.integrated.tabs.enabled": false,
	"terminal.integrated.cursorStyle": "line",

	// Настройки обозревателя
	"explorer.confirmDelete": false,
	"explorer.confirmDragAndDrop": false,
	"explorer.compactFolders": false,
	"workbench.editor.tabSizing": "shrink",
	"workbench.startupEditor": "newUntitledFile",

	// Настройки отладки
	"debug.toolBarLocation": "hidden",
	"debug.focusWindowOnBreak": false,
	"debug.showInlineBreakpointCandidates": false,
	"debug.showBreakpointsInOverviewRuler": false,

	// Настройки для Breadcrumbs
	"breadcrumbs.icons": false,
	"breadcrumbs.showKeys": false,
	"breadcrumbs.showFiles": false,
	"breadcrumbs.symbolPath": "off",
	"breadcrumbs.showArrays": false,
	"breadcrumbs.showEvents": false,
	"breadcrumbs.showFields": false,
	"breadcrumbs.showClasses": false,
	"breadcrumbs.showMethods": false,
	"breadcrumbs.showBooleans": false,
	"breadcrumbs.showFunctions": false,
	"breadcrumbs.showConstants": false,
	"breadcrumbs.showEnumMembers": false,
	"breadcrumbs.showConstructors": false,

	// Разрешенные символы для Unicode Highlight
	"editor.unicodeHighlight.allowedCharacters": {
		"а": true,
		"с": true,
		"Т": true,
		"б": true,
		"е": true,
		" ": true
	},
	"editor.hideCursorInOverviewRuler": true,
	"git.enableSmartCommit": true,

	// Исключаемые файлы
	"files.exclude": {
		"**/.expo": true,
		"**/.expo-shared": true,
		"**/.idea": true,
		"**/.nuxt": true
	},

	// Прочие настройки
	"files.defaultLanguage": "plaintext",
	"diffEditor.ignoreTrimWhitespace": false,
	"security.workspace.trust.untrustedFiles": "open",
	"vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
	"window.confirmBeforeClose": "keyboardOnly",
	"git.openRepositoryInParentFolders": "never",
	"editor.gotoLocation.multipleDefinitions": "goto",
	"editor.stickyScroll.scrollWithEditor": false,
	"workbench.tree.enableStickyScroll": false,
	"editor.stickyScroll.enabled": false,
	"window.commandCenter": false,
	"markdown.updateLinksOnFileMove.enabled": "always",
	"workbench.colorTheme": "1987",
	"workbench.productIconTheme": "fluent-icons",
	"workbench.iconTheme": "quill-icons",
	"files.autoSave": "afterDelay",
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	}
}