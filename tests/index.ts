import { expect } from 'chai';
import { KmsEditor as KmsEditorDll, icons } from '../src';
import KmsEditor from '../src/kmseditor';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 KmsEditor DLL', () => {
	it( 'exports KmsEditor', () => {
		expect( KmsEditorDll ).to.equal( KmsEditor );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
