select "films"."title",
      "films"."releaseYear",
      "categories"."name" as "category"
from "filmCategory"
join "categories" using ("categoryId")
join "films" using ("filmId")
where "films"."title" = 'Boogie Amelie';
