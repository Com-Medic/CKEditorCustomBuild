/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import List from '@ckeditor/ckeditor5-list/src/list';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import Font from '@ckeditor/ckeditor5-font/src/font';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import AloeMagic from './aloe-magic';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Alignment,
	List,
	Indent,
	IndentBlock,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	Font,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageResize,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Paragraph,
	PasteFromOffice,
	Base64UploadAdapter,
	AloeMagic
];

// Editor configuration.
/*
'|',
'aloeMagic'
 */

ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontFamily',
			'fontSize',
			'|',
			'bold',
			'italic',
			'underline',
			'|',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'alignment',
			'numberedList',
			'bulletedList',
			'outdent',
			'indent',
			'|',
			'insertTable',
			'|',
			'imageUpload',
			'|',
			'aloeMagic'
		]
	},
	fontColor: {
		colors: [
			{
				color: 'rgb(0, 0, 0)',
				label: 'Black'
			},
			{
				color: 'rgb(77, 77, 77)',
				label: 'Dim grey'
			},
			{
				color: 'rgb(153, 153, 153)',
				label: 'Grey'
			},
			{
				color: 'rgb(230, 230, 230)',
				label: 'Light grey'
			},
			{
				color: 'rgb(255, 255, 255)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'rgb(228, 47, 43)',
				label: 'Red'
			},
			{
				color: 'rgb(248, 235, 37)',
				label: 'Yellow'
			},
			{
				color: 'rgb(240, 125, 45)',
				label: 'Orange'
			},
			{
				color: 'rgb(45, 164, 64)',
				label: 'Green'
			},
			{
				color: 'rgb(66, 155, 204)',
				label: 'Blue'
			},
			{
				color: 'rgb(239, 132, 174)',
				label: 'Pink'
			},
			{
				color: 'rgb(226, 177, 141)',
				label: 'Beige'
			},
			{
				color: 'rgb(145, 104, 160)',
				label: 'Purple'
			}
		]
	},
	fontBackgroundColor: {
		colors: [
			{
				color: 'rgb(0, 0, 0)',
				label: 'Black'
			},
			{
				color: 'rgb(77, 77, 77)',
				label: 'Dim grey'
			},
			{
				color: 'rgb(153, 153, 153)',
				label: 'Grey'
			},
			{
				color: 'rgb(230, 230, 230)',
				label: 'Light grey'
			},
			{
				color: 'rgb(255, 255, 255)',
				label: 'White',
				hasBorder: true
			},
			{
				color: 'rgb(228, 47, 43)',
				label: 'Red'
			},
			{
				color: 'rgb(248, 235, 37)',
				label: 'Yellow'
			},
			{
				color: 'rgb(240, 125, 45)',
				label: 'Orange'
			},
			{
				color: 'rgb(45, 164, 64)',
				label: 'Green'
			},
			{
				color: 'rgb(66, 155, 204)',
				label: 'Blue'
			},
			{
				color: 'rgb(239, 132, 174)',
				label: 'Pink'
			},
			{
				color: 'rgb(226, 177, 141)',
				label: 'Beige'
			},
			{
				color: 'rgb(145, 104, 160)',
				label: 'Purple'
			}
		]
	},
	fontFamily: {
		options: [
			'default',
			'Arial, Helvetica, sans-serif',
			'Courier New, Courier, monospace',
			'Georgia, serif',
			'Lucida Sans Unicode, Lucida Grande, sans-serif',
			'Tahoma, Geneva, sans-serif',
			'Times New Roman, Times, serif',
			'Trebuchet MS, Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif',
			'Merriweather, Times, serif',
			'Comic sans MS, Helvetica sans-serif',
			'CrayonE, Times, serif',
			'CrayonL, Times, serif',
			'Cursif, Times, serif',
			'Phone, Times, serif',
			'PlumBAE, Times, serif',
			'PlumBAL, Times, serif',
		],
		supportAllValues: true
	},
	fontSize: {
		options: [
			8,
			9,
			10,
			11,
			12,
			14,
			18,
			24,
			30,
			36,
			48,
			60,
			72,
			96
		],
		supportAllValues: true
	},
	table: {
		contentToolbar: [
			'tableColumn', 'tableRow', 'mergeTableCells',
			'tableProperties', 'tableCellProperties'
		]
	},
	image: {
		styles: [
			'full', 'alignLeft', 'alignCenter', 'alignRight'
		],
		toolbar: [
			'imageStyle:full',
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'fr'
};
