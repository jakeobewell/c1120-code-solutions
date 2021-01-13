select "customers"."firstName",
"customers"."lastName",
sum("payments"."amount") as "Total Paid"
from "customers"
join "payments" using ("customerId")
group by "customers"."customerId"
order by "Total Paid" desc
