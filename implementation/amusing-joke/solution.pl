#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use 5.012;

my $a = <>;
chomp $a;

my $b = <>;
chomp $b;

my $c = <>;
chomp $c;

my $friends = join '', (sort split '', $a . $b);
my $pile = join '', (sort split '', $c);

print $friends eq $pile ? "YES" : "NO";