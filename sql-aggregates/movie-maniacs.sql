select "customers"."firstName" as "Customer",
sum("payments"."amount") as "Total Paid"
from "customers"
join "payments" using ("customerId")
group by "customers"."firstName"
order by "Total Paid" desc
