host_and_guests = "".join(sorted(raw_input() + raw_input()))
pile = "".join(sorted(raw_input()))
print ['NO', 'YES'][host_and_guests == pile]
