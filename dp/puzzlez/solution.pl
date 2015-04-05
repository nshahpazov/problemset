#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use 5.012;

use List::Util qw[min max];

my $n = <>;
my $m = <>;
my @arr;

# read m numbers
for (1..$m) {
        my $num = <STDIN>;
        chomp $num;
        push @arr, $num;
}

# sort the @array
my @sorted = sort {$a <=> $b} @arr;
my $best = 100000000000;
for my $i (1..$m - $n) {
        $best = min $best, ($sorted[$i + $n - 1] - $sorted[$i]);
}
print $best;