import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { SortPipe } from './sort/sort';
import { CategoryPipe } from './category/category';
@NgModule({
	declarations: [SearchPipe,
    SortPipe,
    CategoryPipe],
	imports: [],
	exports: [SearchPipe,
    SortPipe,
    CategoryPipe]
})
export class PipesModule {}
