import { expect } from 'chai';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import KmsEditor from '../src/kmseditor';

describe( 'KmsEditor', () => {
	it( 'should be named', () => {
		expect( KmsEditor.pluginName ).to.equal( 'KmsEditor' );
	} );

	describe( 'init()', () => {
		let domElement: HTMLElement, editor: ClassicEditor;

		beforeEach( async () => {
			domElement = document.createElement( 'div' );
			document.body.appendChild( domElement );

			editor = await ClassicEditor.create( domElement, {
				plugins: [
					Paragraph,
					Heading,
					Essentials,
					KmsEditor
				],
				toolbar: [
					'kmsEditorButton'
				]
			} );
		} );

		afterEach( () => {
			domElement.remove();
			return editor.destroy();
		} );

		it( 'should load KmsEditor', () => {
			const myPlugin = editor.plugins.get( 'KmsEditor' );

			expect( myPlugin ).to.be.an.instanceof( KmsEditor );
		} );

		it( 'should add an icon to the toolbar', () => {
			expect( editor.ui.componentFactory.has( 'kmsEditorButton' ) ).to.equal( true );
		} );

		it( 'should add a text into the editor after clicking the icon', () => {
			const icon = editor.ui.componentFactory.create( 'kmsEditorButton' );

			expect( editor.getData() ).to.equal( '' );

			icon.fire( 'execute' );

			expect( editor.getData() ).to.equal( '<p>Hello CKEditor 5!</p>' );
		} );
	} );
} );
