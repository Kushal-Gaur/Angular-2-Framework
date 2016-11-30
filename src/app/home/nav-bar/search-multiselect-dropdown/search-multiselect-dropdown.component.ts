import { Component, OnInit, Output } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MultiselectDropdown,IMultiSelectOption,IMultiSelectSettings,IMultiSelectTexts} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
declare var $:any;
@Component({
  selector: 'app-search-multiselect-dropdown',
  templateUrl: './search-multiselect-dropdown.component.html',
  styleUrls: ['./search-multiselect-dropdown.component.css'],
  
})
export class SearchMultiselectDropdownComponent implements OnInit {
@ViewChild('dropdownItem') el:ElementRef;

constructor() { }
  public index1 : string ="";
  public idArray : Array<any>;
  public items:any = {links :[{id:'1',text :'Option 1'},
    {id:'2',text :'Option 2'}, {id:'3',text :'Option 3'}]};
 public options = [];

  ngOnInit() {
  }

  private selectedCountries: number[] = [1, 2];

	private countries: IMultiSelectOption[] = [
		{ id: 1, name: 'Sweden' },
		{ id: 2, name: 'Norway' },
		{ id: 3, name: 'Denmark' },
		{ id: 4, name: 'Finland' },
	];

	private texts: IMultiSelectTexts = {
		defaultTitle: 'Select countries'
	};

	private selectSettings: IMultiSelectSettings = {
		checkedStyle: 'glyphicon',
		showCheckAll: true,
		showUncheckAll: true,
	};

	private selectSettings2: IMultiSelectSettings = {
		enableSearch: true,
	};

	private selectSettings3: IMultiSelectSettings = {
		selectionLimit: 3,
		dynamicTitleMaxItems: 0,
	};

}
