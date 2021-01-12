select "a"."line1",
       "a"."district",
       "cities"."name" as "City",
       "countries"."name" as "Country"
from "cities"
join "addresses" as "a" using ("cityId")
join "countries" using ("countryId");
