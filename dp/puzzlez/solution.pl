#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use 5.012;
use List::Util qw[min max];

my ($n, $m) = split ' ', <>;
my @arr = sort {$a <=> $b} split ' ', <>;

my $best = 1e10;
for my $i (0..$m - $n) {
        $best = min $best, ($arr[$i + $n - 1] - $arr[$i]);
}
print $best;